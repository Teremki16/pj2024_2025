using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpikeMovement : MonoBehaviour
{
    [SerializeField]  Transform UpPoint, downPoint;
    [SerializeField] float moveUpSpeed, moveDownSpeed;
    [SerializeField] bool isMoveUp;
    [SerializeField] bool isHorizontal = false;

    private void Update()
    {
        if (!isHorizontal)
        {
            if (transform.position.y > UpPoint.position.y)
            {
                isMoveUp = false;
            }
            else if (transform.position.y < downPoint.position.y)
            {
                isMoveUp = true;
            }
        }
        else
        {
            if (transform.position.x < UpPoint.position.x)
            {
                isMoveUp = false;
            }
            else if (transform.position.x > downPoint.position.x)
            {
                isMoveUp = true;
            }
        }
    }
    private void FixedUpdate()
    {
        if (!isHorizontal)
        {
            if (isMoveUp)
            {
                transform.Translate(Vector3.up * moveUpSpeed * Time.fixedDeltaTime);
            }
            else
            {
                transform.Translate(Vector3.down * moveDownSpeed * Time.fixedDeltaTime);
            }
        }
        else
        {
            if (isMoveUp)
            {
                transform.Translate(Vector3.left * moveUpSpeed * Time.fixedDeltaTime);
            }
            else
            {
                transform.Translate(Vector3.right * moveDownSpeed * Time.fixedDeltaTime);
            }
        }
    }
}
