using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spikeMovementScript : MonoBehaviour
{
    [SerializeField] Transform upPoint, downPoint;
    [SerializeField] float moveUpSpeed, moveDownSpeed;
    [SerializeField] bool isMoveUp;

    private void Update()
    {
        if(transform.position.y > upPoint.position.y)
        {
            isMoveUp = false;
        }
        else if(transform.position.y < downPoint.position.y)
        {
            isMoveUp = true;
        }
    }

    private void FixedUpdate()
    {
        if (isMoveUp)
        {
            transform.Translate(Vector3.up * moveUpSpeed * Time.fixedDeltaTime);
        }
        else
        {
            transform.Translate(Vector2.down * moveDownSpeed * Time.fixedDeltaTime);
        }
    }
}
