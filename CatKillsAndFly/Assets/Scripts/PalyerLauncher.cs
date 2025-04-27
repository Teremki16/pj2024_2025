using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PalyerLauncher : MonoBehaviour
{

    [SerializeField] float force;
    [SerializeField] float mindrag;

    private Rigidbody2D rb;
    private Camera maincamer;

    private Vector2 startpos;
    public bool candrag;
    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        
        rb.isKinematic = false;
    }
    


    private void OnMouseDown()
    {
        float playerSpeed = rb.velocity.magnitude;
        if(playerSpeed<mindrag)
        {
            candrag = true;
           // rb.isKinematic = true;
            rb.velocity = Vector2.zero;
            startpos = transform.position;
        }

        
    }
    private void OnMouseDrag()
    {
        if (candrag)
        {
            Vector2 mousepos = maincamer.ScreenToWorldPoint(Input.mousePosition);
            transform.position = mousepos;
        }
    }
    private void OnMouseUp()
    {
        if(candrag)
        {
            Vector2 dir = startpos - rb.position;
           // rb.isKinematic = false;
            rb.AddForce(dir, ForceMode2D.Impulse);
            candrag = false;
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        candrag = true;
    }

    // Start is called before the first frame update
    void Start()
    {
        maincamer = Camera.main;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
